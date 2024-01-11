import React, { useState } from 'react'


export default function TaskList() {
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [items, setItems] = useState([]);
    const [editTitle, setEditTitle] = useState('')
    const [editDescription, setEditDescription] = useState('')
    const [editIndex, setEditIndex] = useState(null);
    

    const changeTitleInput = (e) => {
        if (e.target.value.length <= 30 ) {
            setTitleInput(e.target.value);
        };
    };

    const changeDescriptionInput = (e) => {
        if (e.target.value.length <= 40) {
            setDescriptionInput(e.target.value)
        };
      };

    const handleAddItem = () => {
        if (titleInput.trim() !== '' && descriptionInput.trim() !== '') {
          setItems([...items, { title: titleInput, description: descriptionInput }]);
          setTitleInput('');
          setDescriptionInput('');
        }
      }

    const toggleCompletion = (index) => {
        const updatedItems = [...items];
        updatedItems[index].completed = !updatedItems[index].completed;
        setItems(updatedItems);
    };


    const deleteTask = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
      };

      const handleEditTask = (index) => {
        const taskEdit = items[index];
        setEditTitle(taskEdit.title);
        setEditDescription(taskEdit.description);
        setEditIndex(index);
    }

    const confirmEditTask = (index) => {
        if (editTitle.trim() !== '' && editDescription.trim() !== '') {
          const updatedItems = [...items];
          updatedItems[index].title = editTitle;
          updatedItems[index].description = editDescription;
          setItems(updatedItems);
          setEditTitle('');
          setEditDescription('');
          setEditIndex(null);
        }
      };

      
  return (
        <div>
        <input
            type="text"
            value={titleInput}
            onChange={changeTitleInput}
            placeholder="Titulo "
        />
        <input
            type="text"
            value={descriptionInput}
            onChange={changeDescriptionInput}
            placeholder="Descripcion"
        />
        <button onClick={handleAddItem}>
            <i className="ri-add-circle-line"></i>
        </button>
        <ul >
        {items.map((item, index) => (
            <li className='' key={index}style={{ backgroundColor: item.completed ? 'rgb(20, 92, 20)' : '' }}>
              {editIndex === index ? (
                <>
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        placeholder="Editar Título"
                    />
                    <input
                        type="text"
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        placeholder="Editar Descripción"
                    />
                    <button onClick={() => confirmEditTask(index)}>
                        <i className="ri-check-line"></i>
                    </button>
                </>
               ) : (
                <>
                <h4>{item.title}</h4> <i className="ri-contract-right-line"></i> {item.description}

                <button onClick={() => toggleCompletion(index)}>
                  {item.completed ? <i className="ri-close-line"></i> : <i className="ri-check-line"></i>}
                </button>

                <button onClick={() => deleteTask(index)}>
                  <i className="ri-delete-bin-6-line"></i>
                </button>
                <button onClick={() => handleEditTask(index)}>
                  <i className="ri-edit-2-fill"></i>
                </button>
              </>
             )}
            </li>
            ))}
        </ul>
    </div>
    );
}

