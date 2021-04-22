import React, { useState } from 'react';
import { useHistory } from 'react-router';
import EmployeesContext from './../../context/EmployeesContext';
import { ErrorBlock, FormField, SubmitButton } from './../../components';
import './addEmployees.css';

const AddEmployees = () => {
    const [ name, setName ] = useState("");
    const [ location, setLocation ] = useState("");
    const [ pet, setPet ] = useState("");
    const [ formError, setFormError ] = useState("");
    const [ showError, setShowError ] = useState(false);
    let history = useHistory();

    const resetForm = () => {
        setName("");
        setLocation("");
        setPet("");
    };

    const validate = () => {
        let result = true;
        if(!name.length || !location.length || !pet.length) {
            result = false;
            setFormError("Oops, invalid form, double check the inputs and try again!");
            setShowError(true);
        } else if(formError.length) {
            setShowError(false);
        }
        return result;
    };

    return (
    <EmployeesContext.Consumer>
        {({ addEmployee }) => (
            <div className="page-container-add-employee">
                <form>
                    <FormField label="Name" value={name} onChange={setName} />
                    <FormField label="Location" value={location} onChange={setLocation} />
                    <FormField label="Pet" value={pet} onChange={setPet} />
                </form>

                <SubmitButton
                    onClick={() => {
                        if(!validate()) return;
                        addEmployee(name, location, pet);
                        resetForm();
                        history.push('/');
                    }}
                    className="add-employee-button"
                    label="Add Employee"
                />

                <ErrorBlock
                    onClose={() => setShowError("")}
                    visible={showError}
                    message="Oops, invalid form, double check the inputs and try again!"
                />
            </div>
        )}
    </EmployeesContext.Consumer>
    );
};

export default AddEmployees;
