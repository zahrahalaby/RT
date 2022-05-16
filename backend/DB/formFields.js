exports.fields =
    [
        {
            "name": "firstName",
            "type": "input",
            "label": "First Name:",
            "funcName": "isAllLetters",
            "requierd": true,
            "properties": {
                "inputType": "text"
            }
        },
        {
            "name": "lastName",
            "type": "input",
            "label": "Last Name:",
            "funcName": "isAllLetters",
            "requierd": true,
            "properties": {
                "inputType": "text"
            }
        },
        {
            "name": "mail",
            "type": "input",
            "label": "E-mail",
            "funcName:": "checkEmail",
            "requierd": true,
            "properties": {
                "inputType": "email"
            }
        },
        {
            "name": "phoneNumber",
            "type": "input",
            "label": "Phone Number:",
            "funcName": "checkPhone",
            "requierd": true,
            "properties": {
                "inputType": "tel",
                "pattern": "[0-9]*8"
            }
        },
        {
            "name": "interest",
            "type": "select",
            "label": "Interested In:",
            "funcName": "",
            "requierd": true,
            "properties": {
                "selectOptions": [
                    "QA",
                    "FULLSTACK"
                ],
                "multiple": true
            }
        },
        {
            "name": "maritalStatus",
            "type": "select",
            "label": "Status:",
            "funcName": "",
            "requierd": true,
            "properties": {
                "selectOptions": [
                    "single",
                    "married",
                    "divorced",
                    "widowed"
                ],
                "multiple": false
            }
        },
        {
            "name": "village",
            "type": "input",
            "label": "City:",
            "funcName": "isvillageExist",
            "requierd": true,
            "properties": {
                "inputType": "search"
            }
        },
        {
            "name": "birthDate",
            "type": "input",
            "label": "Birth Date:",
            "funcName": "isValidDate",
            "requierd": true,
            "properties": {
                "inputType": "date"
            }
        },
        {
            "name": "mathLevel",
            "type": "input",
            "label": "Math Level:",
            "funcName": "checkRange",
            "requierd": false,
            "properties": {
                "inputType": "number",
                "min": "3",
                "max": "5"
            }
        },
        {
            "name": "mathGrade",
            "type": "input",
            "label": "Math Grade:",
            "funcName": "checkRange",
            "requierd": false,
            "properties": {
                "inputType": "text"
            }
        },
        {
            "name": "englishLevel",
            "type": "input",
            "label": "English Level:",
            "funcName": "checkRange",
            "requierd": false,
            "properties": {
                "inputType": "number",
                "min": "3",
                "max": "5"
            }
        },
        {
            "name": "englishGrade",
            "type": "input",
            "label": "English Grade:",
            "funcName": "checkRange",
            "requierd": false,
            "properties": {
                "inputType": "text"
            }
        },
        {
            "name": "psychometry",
            "type": "input",
            "label": "Psychometry:",
            "funcName": "numOfDigits",
            "requierd": false,
            "properties": {
                "inputType": "text"
            }
        },
        {
            "name": "travelling",
            "type": "input",
            "label": "Ability To Travel To Dalia:",
            "funcName": "",
            "requierd": true,
            "properties": {
                "inputType": "checkbox"
            }
        },
        {
            "name": "morningWork",
            "type": "input",
            "label": "Morning Availability:",
            "funcName": "",
            "requierd": true,
            "properties": {
                "inputType": "range"
            }
        },
        {
            "name": "childrenArrangement",
            "type": "select",
            "label": "Have Arrangment For Children: ",
            "funcName": "",
            "requierd": true,
            "properties": {
                "selectOptions": [
                    "Yes",
                    "No",
                    "Not Relevant",
                ],
                "multiple": false
            }
        },
        {
            "name": "studiesCombined",
            "type": "input",
            "label": "Still A Student",
            "funcName": "",
            "requierd": true,
            "properties": {
                "inputType": "checkbox"
            }
        },
        {
            "name": "adjustment",
            "type": "textArea",
            "label": "Why Do You Think That You Are The Suitable Candidate? :",
            "funcName": "",
            "requierd": true,
            "properties": {

            }
        },
        {
            "name": "CV",
            "type": "input",
            "label": "CV:",
            "funcName": "",
            "requierd": true,
            "properties": {
                "inputType": "file"
            }
        },
        {
            "name": "matriculationGrades",
            "type": "input",
            "label": "Matriculation Grades:",
            "funcName": "",
            "requierd": true,
            "properties": {
                "inputType": "file"
            }
        },
        {
            "name": "psychometricGrade",
            "type": "input",
            "label": "Psychometric Grade:",
            "funcName": "",
            "requierd": true,
            "properties": {
                "inputType": "file"
            }
        }
    ];

