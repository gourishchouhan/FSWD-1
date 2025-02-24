import ServiceCard from "./components/ServiceCard"

const App = () => {
  const service = [
    {title:"Web Development", description:"Build modern websites"},
    {title:"Graphic Design", description:"Awesome Designs"}
  ];
  return(
    <div>
      <h1>Our Service</h1>
      {service.map((service, index)=> (
      <ServiceCard key={index} title={service.title} description={service.description} />
      
    ))}
    </div>
  )
}
export default App;