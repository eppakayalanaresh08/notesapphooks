import {ListItem, Title, Note} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, noteText} = noteDetails

  return (
    <ListItem>
      <Title>{title}</Title>
      <Note>{noteText}</Note>
    </ListItem>
  )
}

export default NoteItem

// import {ContainerEach, EachParagraph, UserNotes} from './styledComponents'

// const NoteItem = props => {
//   const {eachList} = props
//   const {userTitle, userNotes} = eachList
//   return (
//     <ContainerEach>
//       <EachParagraph>{userTitle}</EachParagraph>
//       <UserNotes>{userNotes}</UserNotes>
//     </ContainerEach>
//   )
// }

// export default NoteItem
