export default function ReactLesson1() {

    // Exc1 

    const companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ];

  const showCompany = (name, revenue) => (
    <div id={name} key={name}>
        {name} makes {revenue} every year
    </div>
  );

    //   Exc2 

    const getClassName = (temperature) => { 
        if (temperature < 15) return "freezing";
        if (temperature >= 15 && temperature <= 30) return "fair";
        return "hell-scape";        
    }

    const temperature = 8;

    return (
    <>
      {/* Exc1 */}
        <div className="ex-space">
            <h4 className='ex-title'>Exercise 1</h4>
            <div className="exercise" id="ex-1">
                <div id="companies-container">
                    {companies.map(company => showCompany(company.name, company.revenue))}
                </div>
            </div>
        </div>

        <hr />

      {/* Exc2 */}
        <div className="ex-space">
            <h4 className='ex-title'>Exercise 2</h4>
            <div className="exercise" id="ex-2">
                <div id="weatherBox" className={getClassName(temperature)}>
                    Temperature: {temperature}°C: {getClassName(temperature)}
                </div>
            </div>
        </div>

    </>
  );
}