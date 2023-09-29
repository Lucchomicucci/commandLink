import FormComponent from "../../components/formComponent/formComponent"
import { data } from "../../data/data"

const HomePage: React.FC = () => {
    return(
        <>
        <h1>Submit your form:</h1>
        <FormComponent data={data}/>
        </>
    )
}

export default HomePage