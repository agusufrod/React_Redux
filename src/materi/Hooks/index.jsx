import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Hooks = () => {
  const [inputKeyword, setInputKeyword] = useState('');
  const [berita, setBerita] = useState([]);
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setInputKeyword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSearch(inputKeyword);
  };

  useEffect(() => {
    const resapi = (input) => {
      fetch('https://newsapi.org/v2/everything?apiKey=4bc675224b5144e0bcb1f83216534b65&q=' + input)
        .then((response) => response.json())
        .then((response) => setBerita(response.articles));
    };

    resapi(search);
  }, [search]);

  return (
    <div>
      {' '}
      <div className="container">
        <div className="row mt-8">
          <div className="col">
            <h1>berita</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <div className="input-group mb-3">
              <form onSubmit={onSubmit} style={{ width: '80%' }}>
                <input type="text" className="form-control input-keyword" placeholder="Search Berita..." onChange={handleChange} />
                <div className="input-group-append">
                  <button className="btn btn-primary search-button" type="submit" style={{ marginLeft: '600px', marginTop: '-68px' }}>
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="row berita-container">
          {berita
            ? berita.map((item, index) => {
                return (
                  <div class="col-md-4 my-3">
                    <div class="card">
                      <img src={item.urlToImage} alt={item.title} class="card-img-top" />
                      <div class="card-body">
                        <h5 class="card-title">{item.author}</h5>
                        <p class="card-text">{item.title}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            : []}
        </div>
      </div>
      {/* UNTUK MODAL BOX */}
      {/* Modal  */}
      {/* <div className="modal fade" id="beritaDetailModal" tabindex="-1" aria-labelledby="beritaDetailModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="beritaDetailModalLabel">
            Modal title
          </h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body"></div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div> */}
    </div>
  );
};

export default Hooks;

//materi HOOKS

// import { useState } from 'react';
// import Counter from './pembahasan/Counter';
// import Effect from './pembahasan/Effect';
// import { useToogle } from './pembahasan/Hooks/use.Toogle';
// import Identity from './pembahasan/Identity';

// const Hooks = () => {
//   let [label, setLabel] = useState('ON');
//   let [lampu, setLampu] = useToogle();

//   const style = {
//     background: lampu ? 'yellow' : 'black',
//     textAlign: 'center',
//     height: '400px',
//   };

//   const saklar = () => {
//     setLampu(!lampu);
//     setLabel((e) => {
//       if (e === 'ON') {
//         return 'OFF';
//       }
//       return 'ON';
//     });
//   };

//   return (
//     <div style={style}>
//       <button onClick={saklar}>{label}</button>
//     </div>
//   );
// };

// export default Hooks;
