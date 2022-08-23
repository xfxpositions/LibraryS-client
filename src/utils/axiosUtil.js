import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYzMDI4NTU3ZGY1ZjMxZTBjMzJkOGY2NCIsIm5hbWUiOiJ5dXN1ZmthcmFjYTMiLCJwYXNzd29yZCI6Ijg4NjZlYTg3ZGNhOTUzNDM4NDgwYjEzYTc4MzBiZjYxYzUyZTY4ZGY3MjM1MjI1NGIzZGQ4NDFhOWQ5MGNiYzMiLCJjcmVhdGVkQXQiOiIyMDIyLTA4LTIxVDE5OjE5OjUxLjM0MVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTA4LTIxVDE5OjE5OjUxLjM0MVoiLCJfX3YiOjB9LCJpYXQiOjE2NjExNTQ3NDUsImV4cCI6MTY2MTE1ODM0NSwiaXNzIjoiTGlicmFyeVMgc3lzdGVtIn0.BaFx6zaUBAt-PHJZco40YTF9eqROzP3bJ45SzRgDVag",
  },
});

export default instance;
