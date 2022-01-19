import React, { useState } from 'react'

const MultipleInputs = () => {

    const [userRegistration, setUserRegistration] = useState({
        employeeId: "",
        department: "",
        fullname: "",
        salary: "",
        DOB: "",
        DOJ: "",
        gender: "",
        designation: ""
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setUserRegistration({ ...userRegistration, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ...userRegistration, id:new Date().getTime().toString() }
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);

        setUserRegistration({ employeeId: "", department: "", fullname: "", salary: "", DOB: "", DOJ: "", gender: "", designation: "" });
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="employeeId"> Employee ID     </label>
                    <input type="text" value={userRegistration.employeeId}
                        onChange={handleInput}
                        name="employeeId" id="employeeId"/>
                </div>

                <div>
                    <label htmlFor="dept">Department     </label>
                    <input type="text" autoComplete="off"
                        value={userRegistration.department}
                        onChange={handleInput}
                        name="department" id="department" />
                </div>

                <div>
                    <label htmlFor="fullname">Full Name     </label>
                    <input type="text" 
                        value={userRegistration.fullname}
                        onChange={handleInput}
                        name="fullname" id="fullname" />
                </div>

                <div>
                    <label htmlFor="sal">Salary     </label>
                    <input type="number" autoComplete="off"
                        value={userRegistration.salary}
                        onChange={handleInput}
                        name="salary" id="salary" />
                </div>

                <div>
                    <label htmlFor="DOB">Date-of-birth     </label>
                    <input type="date" autoComplete="off"
                        value={userRegistration.DOB}
                        onChange={handleInput}
                        name="DOB" id="DOB" />
                </div>

                <div>
                    <label htmlFor="DOJ">Date-of-joining     </label>
                    <input type="date" autoComplete="off"
                        value={userRegistration.DOJ}
                        onChange={handleInput}
                        name="DOJ" id="DOJ" />
                </div>

                <div>
                    <label htmlFor="gender">Gender     </label>
                    <input type="radio" autoComplete="off"
                        value={userRegistration.gender}
                        onChange={handleInput}
                        name="gender" value="male" />Male
                    <input type="radio" autoComplete="off"
                        value=""
                        onChange={handleInput}
                        name="gender" value="female" />Female
                    <input type="radio" autoComplete="off"
                        value=""
                        onChange={handleInput}
                        name="gender" value="other" />Other
                </div>

                <div>
                    <label htmlFor="designation">Designation     </label>
                    <input type="text" autoComplete="off"
                        value={userRegistration.designation}
                        onChange={handleInput}
                        name="designation" list="listofwork" />
                    <datalist id="listofwork">
                        <option value="Trainee Engineer" />
                        <option value="Software Engineer" />
                        <option value="System Analyst" />
                        <option value="Project Manager" />
                        <option value="Business Analyst" />
                    </datalist>
                </div>

                <button type='submit'>Registration</button>
            </form>

            <div>
                {
                    records.map((curElem) => {
                        const {employeeID, department, fullname, salary, dob, doj, gender,designation} = curElem;
                        return (
                            <div className="showDataStyle" key={curElem.id}>
                                <p>{employeeID}</p>
                                <p>{department}</p>
                                <p>{fullname}</p>
                                <p>{salary}</p>
                                <p>{dob}</p>
                                <p>{doj}</p>
                                <p>{gender}</p>
                                <p>{designation}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MultipleInputs