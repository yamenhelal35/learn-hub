import React, { useState, useEffect } from 'react';

const CreateCommunity = ({ onSave }) => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [owner, setOwner] = useState('');

  const handleSave = () => {
    // Validate data if needed
    const newCommunity = {
      name,
      details,
      owner
    };
    onSave(newCommunity);
  };

  useEffect(() => {
    console.log('Props received by CreateCommunity:', { onSave });
  }, [onSave]);

  return (
    <div>
      <h2>Create Community</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Details"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      <input
        type="text"
        placeholder="Owner"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default CreateCommunity;
