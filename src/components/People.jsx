import PropTypes from "prop-types";
import { Person } from "./Person";

export const People = ({ people, setPeople }) => {
  //Estado para gestionar el Id de la Persona
  const [editingId, setEditingId] = useState(null);

  ///Estado para alamcenar temporalmente los datos de la persona que se esta editando
  const [editedPerson, setEditedPerson] = useState({
    name: "",
    role: "",
    img: "",
  });

  //Metodo para  gestionar los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPerson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //Metodo para crear nueva persona en el IT Team
  const handleCreate = (e) => {
    e.preventDefault();

    ///Agregar una persona al array
    setPeople([...people, { id: people.length + 1, ...editedPerson }]);

    //Reiniciar el estado del formulario
    setEditedPerson({ name: "", role: "", img: "" });
  };

  return (
    <div>
      <h2 className="text-center my-4">IT Team</h2>
      <div className="container">
        <div className="row d-flex flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-3">
          {people.map((people) => {
            return (
              <div key={people.id}>
                <Person
                  id={people.id}
                  name={people.name}
                  img={people.img}
                  role={people.role}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/*Formulario*/}
      <div className="container">
        <h2 className=" text-center mt-4">Crear Nuevo Empleado</h2>
        <form action="">
          <div>
            <label htmlFor="name">Nombres</label>
            <input
              type="text"
              name="name"
              value={editedPerson.name}
              required
              className="form-control"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

People.propTypes = {
  people: PropTypes.array,
  setPeople: PropTypes.func,
};
