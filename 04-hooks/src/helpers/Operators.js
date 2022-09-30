export const Operators = (numeros, setNumeros) => { 
const { numero1, numero2 } = numeros;
  const  handleChange = (e) => {
    const { name, value } = e.target;
        setNumeros({
        ...numeros,
        [name]: parseFloat(value)
        })
    };
    const sum = () => numero1 + numero2;
    const res = () => numero1 - numero2;
    const div = () => numero1 / numero2;
    const mul = () => numero1 * numero2;

    return {handleChange, sum, res, mul, div,numero1, numero2}
}
    


