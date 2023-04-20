import dataset from '../dataset/users_info.json'

export default function getActiveUsers(name) {
    const result = dataset.filter(person => {
        if (person.isActive === true & person.name.toLowerCase().includes(name.toLowerCase())) return true;
        else return false;
    }).sort((person1, person2) => {
        if (person1.age < person2.age) return 1;
        if (person1.age > person2.age) return -1;
        else return 0;
    })
    if (result.length != 0) return JSON.stringify(result);
    else {
        return (
            JSON.stringify(
                {
                    "status": 200,
                    "message": "No se encontró el usuario buscado o no esta activo"
                }
            )
        )
    }
}