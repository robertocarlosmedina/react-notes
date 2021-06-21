import React, { useState } from "react"
import Card from "../UI/Card"
import './filtro.css'


const Filter = (props) => {
    const [year, setYear] = useState(props.selected)

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)// calling the function that was passed and executing it in the parent 
        setYear(event.target.value)
    }

    return (
        <Card style="card-filter">
            <div className="expenses-filter">
                <div className="expenses-filter__control">
                    <label className="expenses-filter">Filter by year</label>
                    <select value={year} onChange={dropdownChangeHandler} className="checkBox">
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                    </select>
                </div>
            </div>
        </Card>
    )
}

export default Filter;