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
    areaCuadrante: 1,
    porcentajeMateriaSeca: 1,
    superficieParcela: 0,
    cantidadDeAnimales: 0,
    recurso: "",
    localidad:"",
    fecha:"",
    establecimiento:"",
    lote:"",

  };

  //aca defino las funciones que voy a utilizar para actualizar los estados

  setMedidasDisponible = (values) => {
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

  setMedidasRemanente = (values) => {
    this.setState(
      {
        medidas: {
          ...this.state.medidas,
          materiaVerdeRemanente:
            this.state.medidas.materiaVerdeRemanente + values,
        },
      },
      () => {
        console.log('medidas seteadas', this.state.medidas);
      },
    );
  };

  setAreaCuadrante = (value) => {
    this.setState({areaCuadrante: value}, () => {
      console.log('areaCuadrante seteada', this.state.areaCuadrante);
    });
  };

  setPorcentajeMateriaSeca = (value) => {
    this.setState({porcentajeMateriaSeca: value}, () => {
      console.log(
        'porcentajeMateriaSeca seteada',
        this.state.porcentajeMateriaSeca,
      );
    });
  };

  setSuperficieParcela = (value) => {
    this.setState(
      {superficieParcela: value},
      console.log('superficie seteada', this.state.superficieParcela),
    );
  };

  setCantidadDeAnimales = (value) => {
    this.setState({cantidadDeAnimales: value}, () => {
      console.log('cantidadDeAnimales seteada', this.state.cantidadDeAnimales);
    });
  };

  setRecurso = (value) => {
    this.setState({recurso: value}, () => {
      console.log('recurso seteada', this.state.recurso);
    });
  };
  setFecha = (value) => {
    this.setState({fecha: value}, () => {
      console.log('fecha seteada', this.state.fecha);
    });
  };
  setLocalidad = (value) => {
    this.setState({localidad: value}, () => {
      console.log('localidad seteada', this.state.localidad);
    });
  };
  setEstablecimiento = (value) => {
    this.setState({establecimiento: value}, () => {
      console.log('establecimiento seteada', this.state.establecimiento);
    });
  };
  setLote = (value) => {
    this.setState({lote: value}, () => {
      console.log('lote seteada', this.state.lote);
    });
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{
          // aca van los estados que quiero exponer.
          medidas: this.state.medidas,
          areaCuadrante: this.state.areaCuadrante,
          porcentajeMateriaSeca: this.state.porcentajeMateriaSeca,
          superficieParcela: this.state.superficieParcela,
          cantidadDeAnimales: this.state.cantidadDeAnimales,
          recurso: this.state.recurso,
          lote: this.state.lote,
          fecha: this.state.fecha,
          localidad: this.state.localidad,
          establecimiento: this.state.establecimiento,

          //funciones expuestas
          setMedidasDisponible: this.setMedidasDisponible,
          setMedidasRemanente: this.setMedidasRemanente,
          setAreaCuadrante: this.setAreaCuadrante,
          setPorcentajeMateriaSeca: this.setPorcentajeMateriaSeca,
          setSuperficieParcela: this.setSuperficieParcela,
          setCantidadDeAnimales: this.setCantidadDeAnimales,
          setRecurso: this.setRecurso,
          setLote: this.setLote,
          setFecha: this.setFecha,
          setLocalidad: this.setLocalidad,
          setEstablecimiento: this.setEstablecimiento,
        }}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export {GlobalContext, GlobalProvider};
