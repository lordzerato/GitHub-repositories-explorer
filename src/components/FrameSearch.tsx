import FormSearch from './FormSearch'

type FormSearchProps = {
  title: string
}

const FrameSearch = ({ title }: FormSearchProps) => {
  return (
    <div className="frameSearch">
      {title}
      <FormSearch />
    </div>
  )
}

export default FrameSearch
