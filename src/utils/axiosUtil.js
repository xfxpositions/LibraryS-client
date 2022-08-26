import axios from "axios";
import { useSelector } from "react-redux";

const instance = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYyZjg0NmQ1NzkxOTY4OTQzYmI4YzVlZSIsIm5hbWUiOiJ5dXN1ZmthcmFjYSIsInBhc3N3b3JkIjoiMTQzMDBkZDM5NjEyZjUwZDE0YzFiYzBkZmQ2MTQwYmM5OGRkODI3YTllMjY5ZjM5ZjZkZDBiYmJkMmI4ZTc0MCIsInBlcm1pc3Npb25MZXZlbCI6M30sImlhdCI6MTY2MTQzMjE1NSwiZXhwIjoxNjY0MDI0MTU1LCJpc3MiOiJMaWJyYXJ5UyBzeXN0ZW0ifQ.iSiGT4vLm3AtM-KncaWtnhxKESZxPLDGz5PsLC98hi0",
  },
});

export default instance;
