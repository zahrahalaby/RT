//handle input field
function handleField(name, type, label, funcName, required, properties) {
    let inputObj =
    {
        "name": name,
        "type": type,
        "label": label,
        "funcName": funcName,
        "required": required,
        "properties": properties
    }
    return inputObj;
}
exports.handleField = handleField

function restoreName(name) {
    name = name.replace(/\s/g, '');
    name = name.charAt(0).toLowerCase() + name.substr(1);
    returnname
}
exports.restoreName = restoreName

async function getAllOptions(id) {
    let y1 = await connectionhelper.connectionfun()
    y1.query(`SELECT * FROM questionnairfields WHERE idQuestionnair ='${id}' `, (err, rows) => {
        if (!err) {
            console.log('The data from jopposts table are: \n', rows)
            y1.release()
            if (Object.keys(rows).length > 0) {
                return rows;
            }
            else {
                resolve(false)
            }
        } else {
            console.log(err)
            y1.release()
            reject(err);
        }
    })
}
exports.getAllOptions = getAllOptions