const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./models");
const setupSwagger = require("./swagger/swagger");
const venueType = require("./routes/venue.type.route");
const gender = require("./routes/gender.route");
const humanCategory = require("./routes/human.category.route");
const flat = require("./routes/flat.route");
const sector = require("./routes/sector.route");
const admin = require("./routes/admin.route");
const district = require("./routes/district.route");
const region = require("./routes/region.route");
const country = require("./routes/country.route");
const status = require("./routes/status.route");
const lang = require("./routes/language.route");
const delivery = require("./routes/delivery.route");
const discount = require("./routes/discount.route");
const payment = require("./routes/payment.route");
const venue = require("./routes/venue.route");
const venuePhoto = require("./routes/venue.photo.route");
const eventType = require("./routes/event.type.route");
const event = require("./routes/event.route");
const seatType = require("./routes/seat.type.route");
const seat = require("./routes/seat.route");
const ticketType = require("./routes/ticket.type.route");
const ticket = require("./routes/ticket.route");
const customer = require("./routes/customer.route");
const customerCard  = require("./routes/customer.card.route")
const customerAddress = require("./routes/customer.address.route")
const cart = require("./routes/cart.route")
const booking = require("./routes/booking.route")

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", venueType);
app.use("/api", gender);
app.use("/api", humanCategory);
app.use("/api", flat);
app.use("/api", sector);
app.use("/api", admin);
app.use("/api", district);
app.use("/api", region);
app.use("/api", country);
app.use("/api", status);
app.use("/api", lang);
app.use("/api", delivery);
app.use("/api", discount);
app.use("/api", payment);
app.use("/api", venue);
app.use("/api", venuePhoto);
app.use("/api", eventType);
app.use("/api", event);
app.use("/api", seatType);
app.use("/api", seat);
app.use("/api", ticketType);
app.use("/api", ticket);
app.use("/api", customer)
app.use("/api", customerCard)
app.use("/api", customerAddress)
app.use("/api", cart)
app.use("/api", booking)

setupSwagger(app);

const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
