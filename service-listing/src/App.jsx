import ServiceCard from "./components/ServiceCard";

const App = () => {
  const services = [
    { title: "Web Development", description: "Build modern websites" },
    { title: "Graphic Design", description: "Awesome Designs" },
  ];

  return (
    <div>
      <h1>Our Services</h1>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default App;
