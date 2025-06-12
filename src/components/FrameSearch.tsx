import { Box } from '@chakra-ui/react'
import FormSearch from './FormSearch'

type FormSearchProps = {
  title: string
}

const FrameSearch = ({ title }: FormSearchProps) => {
  return (
    <Box className="frameSearch" color="bg.text">
      {title}
      <FormSearch />
    </Box>
  )
}

export default FrameSearch
