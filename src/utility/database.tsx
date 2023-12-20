import dataCompanies from "@/gameData/companies/dataCompanies";
import dataSpecial from "@/gameData/special/dataSpecial";
import dataTransport from "@/gameData/transport/transportAirports";
import dataCities from "@/gameData/world/cities";

import dataBoardClassic from "@/gameData/board";
import dataCountries from "@/gameData/world/countries";
import dataCorners from "@/gameData/corners";
import dataTax from "@/gameData/tax";

function findObjectById(data: any, id: string) {
  data.find((item: any) => item.id === id)
}

interface BoardRefferenceTile {
  type: "company" | "special" | "transport" | "property" | "tax" | "corner";
  id: string;
}

const database = {
  getObject({ type, id }: any) {
    switch (type) {
      case "company":
        return findObjectById(dataCompanies, id)
      case "tax":
        const tax = dataTax.find((item:any) => item.id === id)
        return {
          type,
          ...tax
        }
      case "special":
        const special = dataSpecial.find((item:any) => item.id === id)
        return {
          type,
          ...special
        };
      case "transport":
        const transport = dataTransport.find((item:any) => item.id === id)
        return {
          type,
          ...transport
        };
      case "corner":
        const corner = dataCorners.find((item:any) => item.id === id)
        return {
          type,
          ...corner
        }
      default:
        let compiledProperty = {};
        const property = dataCities.find((item: any) => item.id === id);
        
        if (property) {
          const propertyCountry = dataCountries.find((item) => item.id === property.countryId);
          compiledProperty = {
            type: type,
            name: property.name,
            icon: propertyCountry?.icon,
            country: propertyCountry?.name
          };
        }

        return compiledProperty;
    }
  },
  compileBoard(boardData: any) {
    const compiledBoard:any = [];

    boardData.map((item: any) => {
      const res = database.getObject(item)
      compiledBoard.push(res)
    })
    console.log(compiledBoard)
    return compiledBoard;
  }
}

export default database;
