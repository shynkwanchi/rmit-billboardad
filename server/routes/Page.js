const express = require('express');
const pageRouter = express.Router();
const pageSchema = require("../models/Page");
const sectionSchema = require("../models/Section");

// Add new page
pageRouter.post('/', async (req, res) => {
    try {
        const pageName = req.body.pageName;
        const description = req.body.description;

        if (!pageName)
            return res.status(400).json({ errMsg: "Please enter all required fields!" });

        let updateDate = new Date().toLocaleString("en-us", { year: "numeric", month: "short", day: "numeric" });

        const newPage = new pageSchema({
            pageName: pageName.trim(),
            description: description.trim(),
            dateCreated: updateDate,
            lastUpdated: updateDate,
        });

        await newPage.save();
        return res.status(201).json({ successMsg: "New page successfully created!" });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ errMsg: "Something went wrong! Please try again." });
    }
});

// Get all pages
pageRouter.get('/', (req, res) => {
    pageSchema.find({}, (err, pages) => {
        if (err) {
            res.send(err);
        }
        res.send(pages);
    })
});

// Get a page
pageRouter.get('/:id', (req, res) => {
    const id = req.params.id;

    pageSchema.findById(id, (err, page) => {
        if (err) {
            res.send(err);
        }
        res.send(page);
    });
});

// Update a page
pageRouter.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const pageName = req.body.pageName;
        const description = req.body.description;

        if (!pageName)
            return res.status(400).json({ errMsg: "Please enter all required fields!" });

        // Check if all the input data are the same as the current data
        foundPage = await pageSchema.findOne({ _id: id, pageName: pageName.trim(), description: description.trim() });
        if (foundPage)
            return res.status(202).json({ acceptMsg: "Page is up to date!" });

        await pageSchema.updateOne(
            { _id: id },
            {
                $set: {
                    pageName: pageName.trim(),
                    description: description.trim(),
                    lastUpdated: new Date().toLocaleString("en-us", { year: "numeric", month: "short", day: "numeric" }),
                }
            }
        );
        return res.status(200).json({ successMsg: "Page successfully updated!" });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ errMsg: "Something went wrong! Please try again." });
    }
});

// Add a section
pageRouter.post('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const sectionName = req.body.sectionName;
        const sectionContent = req.body.sectionContent;

        // Check if section name input is empty
        if (!sectionName)
            return res.status(400).json({ errMsg: "Please enter the section name!" });

        let updateDate = new Date().toLocaleString("en-us", { year: "numeric", month: "short", day: "numeric" });

        // Add new content
        const newSection = new sectionSchema({
            pageID: id,
            sectionName: sectionName.trim(),
            sectionContent: sectionContent.trim(),
            dateCreated: updateDate,
            lastUpdated: updateDate,
        });
        await newSection.save();

        // When the new section is added, the whole page is also updated
        await pageSchema.updateOne(
            { _id: id },
            {
                $set: {
                    lastUpdated: updateDate,
                }
            }
        );
        return res.status(200).json({ successMsg: "New section successfully added!" });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ errMsg: "Something went wrong! Please try again." });
    }
});

// Get sections by page id
pageRouter.get('/sections/:id', (req, res) => {
    const id = req.params.id;

    sectionSchema.find({ pageID: id }, (err, sections) => {
        if (err) {
            res.send(err);
        }
        res.send(sections);
    })
});

// Get a section by id
pageRouter.get('/section/:id', (req, res) => {
    const id = req.params.id

    sectionSchema.findById(id, (err, section) => {
        if (err) {
            res.send(err);
        }
        res.send(section);
    })
})

// Update a section
pageRouter.put('/section/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const sectionName = req.body.sectionName;
        const sectionContent = req.body.sectionContent;

        // Check if section name input is empty
        if (!sectionName)
            return res.status(400).json({ errMsg: "Please enter the section name!" });

        // Check if all the input data are the same as the current data
        let foundSection = await sectionSchema.findOne({ _id: id, sectionName: sectionName.trim(), sectionContent: sectionContent.trim() });
        if (foundSection)
            return res.status(202).json({ acceptMsg: "Section is up to date!" });

        let updateDate = new Date().toLocaleString("en-us", { year: "numeric", month: "short", day: "numeric" });

        await sectionSchema.updateOne(
            { _id: id },
            {
                $set: {
                    sectionName: sectionName.trim(),
                    sectionContent: sectionContent.trim(),
                    lastUpdated: updateDate,
                }
            }
        );

        // When the section is updated, the whole page is also updated
        foundSection = await sectionSchema.findById(id);
        await pageSchema.updateOne(
            { _id: foundSection.pageID },
            {
                $set: {
                    lastUpdated: updateDate,
                }
            }
        );
        return res.status(200).json({ successMsg: "Section successfully updated!" });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ errMsg: "Something went wrong! Please try again." });
    }
})

// Delete a section
pageRouter.delete('/section/:id', async (req, res) => {
    try {
        const id = req.params.id;

        let foundSection = await sectionSchema.findById(id);
        if (!foundSection)
            return res.status(404).json({ errMsg: "Section not found!" });

        await sectionSchema.deleteOne({ id: id });

        // When the section is deleted, the whole page is also updated
        await pageSchema.updateOne(
            { _id: foundSection.pageID },
            {
                $set: {
                    lastUpdated: new Date().toLocaleString("en-us", { year: "numeric", month: "short", day: "numeric" }),
                }
            }
        );
        return res.status(200).json({ successMsg: "Section successfully deleted!" });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ errMsg: "Something went wrong! Please try again." });
    }
});

// Delete a page
pageRouter.delete('/:id', async(req, res) => {
    try {
        const id = req.params.id;

        let foundPage = await pageSchema.findById(id);
        if (!foundPage)
            return res.status(404).json({ errMsg: "Page not found!" });

        // Firstly delete the sections belong to the page
        await sectionSchema.deleteMany({ pageID: id });

        // After that the page is also deleted
        await pageSchema.deleteOne({ _id: id });
        return res.status(200).json({ successMsg: "Page successfully deleted!" });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ errMsg: "Something went wrong! Please try again." });
    }
});

module.exports = pageRouter;