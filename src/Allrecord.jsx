import { useState } from "react"

const Record = ({ alldata }) => {
    const [allrecord, setAllrecord] = useState(alldata);

    const filterData = (category) => {
        let result = alldata.filter((curItem) => {
            return curItem.category === category
        })
        setAllrecord(result)
    }
    const filterallData = () => {
        setAllrecord(alldata)
    }
    return (
        <>
            <center>
                <div style={{ padding: "20px 0 " }}>
                    <button onClick={() => filterallData()} style={{ backgroundColor: "#16191e", borderColor: "gray", borderStyle: "solid", color: "#d8d8ca", borderRadius: '15px', border: '1', width: "50px", height: "50px", fontSize: '20px', margin: '0 10px' }}>All</button>
                    <button onClick={() => filterData('breakfast')} style={{ backgroundColor: "#16191e", borderColor: "gray", borderStyle: "solid", color: "white", borderRadius: '15px', border: '1', width: "150px", height: "50px", fontSize: '20px', margin: '0 10px' }}>Breakfast</button>
                    <button onClick={() => filterData('lunch')} style={{ backgroundColor: "#16191e", borderColor: "gray", borderStyle: "solid", color: "white", borderRadius: '15px', border: '1', width: "100px", height: "50px", fontSize: '20px', margin: '0 10px' }}>Lunch</button>
                    <button onClick={() => filterData('dinner')} style={{ backgroundColor: "#16191e", borderColor: "gray", borderStyle: "solid", color: "white", borderRadius: '15px', border: '1', width: "100px", height: "50px", fontSize: '20px', margin: '0 10px' }}>Dinner</button>
                </div>
                {
                    allrecord.map((v) => {
                        const { name, qty, dec, price, category ,img} = v;
                        return (
                            <div key={name} style={{ display: "inline-block", padding: '20px' }}>
                                <div style={{ backgroundColor: "#16191e", borderColor: "gray", borderStyle: "solid", color: "white", borderRadius: '15px', border: '1', width: "400px", height: "100%", fontSize: '20px', padding: '30px' }}>
                                    <div>
                                        <img src={img} style={{ width:"100%",height:"300px",borderRadius:"15px"}}/>
                                    </div>
                                    <div>
                                        <h1>{name}</h1>
                                        <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                                            <p>{qty}</p>
                                            <p>{price}</p>
                                        </div>
                                        <h3>{dec}</h3>
                                        <h3>{category}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </center >
        </>
    )
}
export default Record;