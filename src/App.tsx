import './App.scss';
import { FormEvent, useState } from 'react';
import { Form } from './components/form/Form';
import { Navbar } from './components/navbar/Navbar';
import { getImages } from './services/getImages';
import { Image } from './models/Image';

function App() {
  const [searchWord, setSearchWord] = useState('');
  const [imageData, setImageData] = useState<Image[]>([]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(searchWord);

    const data: Image[] = await getImages(searchWord);

    setImageData(data);
    console.log(data[0].urls.full);
  };

  return (
    <>
      <Navbar />
      <Form
        handleSubmit={(e) => handleSubmit(e)}
        setSearchWord={setSearchWord}
        searchWord={searchWord}
      />
    </>
  );
}

export default App;
