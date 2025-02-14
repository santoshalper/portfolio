import Card from "../components/Card"
export default function Portfolio() {
    return (
        <>
            <h2>Portfolio</h2>
            <Card background="url(src/assets/runtracker.png)" 
                  name="Run Tracker" 
                  link="https://github.com/santoshalper/project1"/>
            <Card background="url(/assets/FiveDayWeather.png)" 
                  name="Five Day Weather Report" 
                  link="https://github.com/santoshalper/5dayWeatherForcast"/> 
            <Card background="url(/assets/ReadMeCreator.png)" 
                  name="Read Me Creator" 
                  link="https://github.com/santoshalper/readme-creator"/>  
            <Card background="url(/assets/employeeTracker.png)" 
                  name="Employee Tracker" 
                  link="https://github.com/santoshalper/EmployeeTracker"/>  
            <Card background="url(/assets/CarBuilder.png)" 
                  name="Vehicle Builder" 
                  link="https://github.com/santoshalper/VehicleBuilder"/>  

        </>
    )
}