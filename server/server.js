const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config(); // loads the environment variables from a .env file into process.env

const connectDB = require("./config/db");

const userRouter = require("./routes/userRoutes");
const moviesRouter = require("./routes/movieRoutes");
const theatreRouter = require("./routes/theatreRoutes");
// const showRouter = require("./routes/showRoutes");
// const bookingRouter = require("./routes/bookingRoutes");

connectDB();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",}));
/** Routes */
app.use("/api/users", userRouter);
app.use("/api/movies", moviesRouter);
app.use("/api/theatres", theatreRouter);
// app.use("/api/shows", showRouter);
// app.use("/api/bookings", bookingRouter);

app.listen(8082, () => {
  console.log("Server is running at port 8082");
});
