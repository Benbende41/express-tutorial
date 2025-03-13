import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
    {
        id: 1,
        name: "John Doe",
        email: "john@gmail.com",
        password: "123456"
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "jane@gmail.com",
        password: "123456"
    }
]

app.get('/', (req, res) => {
    res.status(200).send({
        msg: "Welcome to the API"
    })
})


app.get("/api/users", (req, res) => {
    res.status(201).send({
        msg: "Users fetched successfully",
        data: mockUsers
    });
})

app.get("/api/users/:id", (req, res) => {
    const user = mockUsers.find((user) => user.id == req.params.id)

    if (!user) {
        return res.status(404).send({
            msg: "Oops! User not found"
        })
    }

    res.status(200).send({
        msg: "User fetched successfully",
        data: user
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

