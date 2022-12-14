import { useState, useEffect, FormEvent } from 'react';
import * as C from './App.styles';
import * as Photos from './services/photos';
import { Photo } from './types/Photo';

const App = () => {
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    setLoading(true);
    setPhotos(await Photos.getAll());
    setLoading(false);
  }



  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>



        {loading &&
          <C.ScreenWarning>
            <div className="emoji">🤚</div>
            <div>Carregando...</div>
          </C.ScreenWarning>
        }
      </C.Area>
    </C.Container>
  );
}

export default App;