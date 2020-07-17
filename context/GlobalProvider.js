import React from 'react';

const GlobalContext = React.createContext();

class GlobalProvider extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    //aca defino los distintos estados
    medidas: {
      materiaVerdeDisponible: 0,
      materiaVerdeRemanente: 0,
    },
    areaCuadrante: 0,
    porcentajeMateriaSeca: 0,
  };

  //aca defino las funciones que voy a utilizar para actualizar los estados

  setMedidas = (values) => {
    this.setState(
      {
        medidas: {
          ...this.state.medidas,
          materiaVerdeDisponible:
            this.state.medidas.materiaVerdeDisponible + values,
        },
      },
      () => {
        console.log('medidas seteadas', this.state.medidas);
      },
    );
  };

  setAreaCuadrante = (value) => {
    this.setState(
      {areaCuadrante: value},
      console.log('areaCuadrante seteada', this.state.areaCuadrante),
    );
  };

  setPorcentajeMateriaSeca = (value) => {
    this.setState(
      {porcentajeMateriaSeca: value},
      console.log(
        'porcentajeMateriaSeca seteada',
        this.state.porcentajeMateriaSeca,
      ),
    );
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{
          // aca van los estados que quiero exponer.
          medidas: this.state.medidas,
          areaCuadrante: this.state.areaCuadrante,
          porcentajeMateriaSeca: this.state.porcentajeMateriaSeca,

          //funciones expuestas
          setMedidas: this.setMedidas,
          setAreaCuadrante: this.setAreaCuadrante,
          setPorcentajeMateriaSeca: this.porcentajeMateriaSeca,
        }}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export {GlobalContext, GlobalProvider};
