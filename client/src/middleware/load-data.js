import { useEffect, useState } from "react";

export const LoadBillboards = () => {
    const [billboards, setBillboards] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/billboards')
            .then(res => res.json())
            .then(data => setBillboards(data))
    }, []);

    return billboards;
}

export const LoadUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return users;
}

export const LoadPages = () => {
    const [pages, setPages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/pages')
            .then(res => res.json())
            .then(data => setPages(data))
    }, []);

    return pages;
}

export const LoadPage = (id) => {
    const [page, setPage] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/pages/${id}`)
            .then(res => res.json())
            .then(data => setPage(data))
    }, [id]);

    return page
}

export const LoadSections = (id) => {
    const [sections, setSections] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/pages/sections/${id}`)
            .then(res => res.json())
            .then(data => setSections(data))
    }, [id]);

    return sections;
}