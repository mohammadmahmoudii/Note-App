const NoteStatus = ({notes}) => {
    const AllNotes=notes.length;
    const complited=notes.filter(n=>n.iscomplited).length;
    const unComplited=AllNotes-complited;

    if(AllNotes==0) return <h2>No Noots Alredy has been Added</h2>
    return ( 
        <ul className="note-status">
        <li>
            All<span>{AllNotes}</span>
        </li>
        <li>
            Complited<span>{complited}</span>
        </li>
        <li>
            Open<span>{unComplited}</span>
        </li>
        </ul>
     );
}
 
export default NoteStatus;