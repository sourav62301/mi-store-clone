import React, { useState, useEffect } from "react";
import NavCard from "./NavCard";
import "../styles/NavOptions.css";

const Navoptions = ({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  home,
  audio,
  accessories,
  fitnessAndLifestyle,
}) => {
  const [miPhoneToggle, setMiPhoneToggle] = useState(false);
  const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopToggle, setLaptopToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [fitnessAndLifestyleToggle, setFitnessAndLifestyleToggle] =
    useState(false);

  useEffect(() => {
    if (window.location.pathname === "/miphones") {
      return setMiPhoneToggle(true);
    }
    if (window.location.pathname === "/redmiphones") {
      return setRedmiPhoneToggle(true);
    }
    if (window.location.pathname === "/tv") {
      return setTvToggle(true);
    }
    if (window.location.pathname === "/laptops") {
      return setLaptopToggle(true);
    }
    if (window.location.pathname === "/audio") {
      return setAudioToggle(true);
    }
    if (window.location.pathname === "/home") {
      return setHomeToggle(true);
    }
    if (window.location.pathname === "/accessories") {
      return setAccessoriesToggle(true);
    }
    if (window.location.pathname === "/lifestyle") {
      return setFitnessAndLifestyleToggle(true);
    }
  }, []);

  return (
    <div className="navOptions">
      {miPhoneToggle
        ? miPhones.map((item, index) => (
            <NavCard
              name={item.name}
              key={item.image}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))
        : null}
      {redmiPhoneToggle
        ? redmiPhones.map((item, index) => (
            <NavCard
              name={item.name}
              key={item.image}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))
        : null}
      {tvToggle
        ? tv.map((item, index) => (
            <NavCard
              name={item.name}
              key={item.image}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))
        : null}
      {laptopToggle
        ? laptop.map((item, index) => (
            <NavCard
              name={item.name}
              key={item.image}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))
        : null}
      {homeToggle
        ? home.map((item, index) => (
            <NavCard
              name={item.name}
              key={item.image}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))
        : null}
      {audioToggle
        ? audio.map((item, index) => (
            <NavCard
              name={item.name}
              key={item.image}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))
        : null}
      {accessoriesToggle
        ? accessories.map((item, index) => (
            <NavCard
              name={item.name}
              key={item.image}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))
        : null}
      {fitnessAndLifestyleToggle
        ? fitnessAndLifestyle.map((item, index) => (
            <NavCard
              name={item.name}
              key={item.image}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))
        : null}
    </div>
  );
};

export default Navoptions;
