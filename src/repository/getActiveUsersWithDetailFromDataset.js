import dataset from '../dataset/users_info.json'

export default function getActiveUsersWithDetailFromDataset(body) {
    const params = Object.keys(body).map((key) => [key, body[key]]);
    const result = dataset.filter(person => {
        params.forEach(param => {
            switch (param[0]) {
                case "_id":
                    if (person._id === param[1]) {
                        return true;
                    } else {
                        return false;
                    }
                case "index":
                    if (person.index === param[1]) {
                        return true;
                    } else {
                        return false;
                    }
                case "guid":
                    if (person.guid === param[1]) {
                        return true;
                    } else {
                        return false;
                    }
                case "isActive":
                    if (person.isActive === param[1]) {
                        return true;
                    } else {
                        return false;
                    }
                case "balance":
                    if (person.balance === param[1]) {
                        return true;
                    } else {
                        return false;
                    }
                case "picture":
                    if (person.picture === param[1]) {
                        return true;
                    } else {
                        return false;
                    }
                case "age":
                    if (person.age === param[1]) {
                        return true;
                    } else {
                        return false;
                    }
                case "eyeColor":
                    if (person.eyeColor === param[1]) {
                        return true;
                    } else {
                        return false;
                    }
                case "name":
                    if (person.name === param[1]) {
                        return true;
                    } else {
                        return false;
                    }

                case "gender":
                    if (person.gender === param[1]) {
                        return true;
                    } else {
                        return false;
                    }
                case "company":
                    if (person.company === param[1]) {
                        return true;
                    } else {
                        return false;
                    }
                case "email":
                    if (person.email === param[1]) {
                        return true;
                    } else {
                        return false;
                    }
                case "phone":
                    if (person.phone === param[1]) {
                        return true;
                    } else {
                        return false;
                    }
                case "address":
                    if (person.address === param[1]) {
                        return true;
                    } else {
                        return false;
                    }
                case "favoriteFruit":
                    if (person.favoriteFruit === param[1]) {
                        return true;
                    } else {
                        return false;
                    }
                default:
                    break;
            }
        });
    })
    if (result.length != 0) {
        return (
            JSON.stringify(
                result
            )
        )
    }
    if (result.length === 0) {
        return (
            JSON.stringify(
                {
                    "status": 200,
                    "message": "No se encontró el usuario buscado"
                }
            )
        )
    }
    else {
        JSON.stringify(
            {
                "status": 500,
                "message": "Hubo un error al procesar los datos, intente nuevamente"
            }
        )
    }

}