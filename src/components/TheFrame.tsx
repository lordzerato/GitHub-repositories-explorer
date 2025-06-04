import FormSearch from "./FormSearch"

type FormSearchProps = {
    title: string
}

const TheFrame = ({ title }: FormSearchProps) => {
    return (
        <div className="frameSearch">
            { title }
            <FormSearch />
        </div>
    )
}

export default TheFrame