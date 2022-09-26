import { useForm } from "react-hook-form";
const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (evento) => {
    console.log(evento);
    setTimeout(() => {
      if (evento != "") {
        document.getElementById("formulario").reset();
      }
    }, 3000);
  };

  return (
    <>
      <h1>contacto</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)} id="formulario">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email
          </label>
          <input
            type="text"
            class="form-control"
            name="email"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            {...register("email", {
              required: {
                value: true,
                message: "Necesitas este campo",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "El formato no es correcto",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Descripción
            </label>
            <textarea
              class="form-control"
              className="description"
              name="description"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="minimo 10 Caracteres"
              {...register("description", {
                required: {
                  value: true,
                  message: "La descripcion es requerida",
                },
                minLength: {
                  value: 10,
                  message: "La descripcion debe tener al menos 10 caracteres",
                },
              })}
            ></textarea>
            {errors.description && <span>{errors.description.message}</span>}
          </div>
        </div>
        <button type="submit" value="submit" className="boton">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Contacto;
