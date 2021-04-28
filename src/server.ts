import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

http.listen(3000, () => console.log("server is running on port 3000"));
