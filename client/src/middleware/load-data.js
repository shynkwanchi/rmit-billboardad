import { useEffect, useState } from "react";

export const LoadBillboards = () => {
    const [billboards, setBillboards] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8082/billboards')
            .then(res => res.json())
            .then(data => setBillboards(data))
    }, []);

    return billboards;
}

export const LoadUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8082/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return users;
}

export const LoadPages = () => {
    const [pages, setPages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8082/pages')
            .then(res => res.json())
            .then(data => setPages(data))
    }, []);

    return pages;
}

export const LoadSections = (id) => {
    const [sections, setSections] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8082/pages/sections/${id}`)
            .then(res => res.json())
            .then(data => setSections(data))
    }, [id]);

    return sections;
}