import Airtable from './airtable';

export const getCurrentStatus = async () => {
  try {
    // @ts-ignore
    let res = await Airtable.select().firstPage();
    console.log(res);
    let formattedData = res.map((data) => {
      return { id: data.id, ...data.fields };
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ formattedData }),
    };
  } catch (error) {
    return {
      statusCode: 200,
      body: JSON.stringify({ error }),
    };
  }
};

export const updateStatus = async (event) => {
  try {
    let { id, ...fields } = JSON.parse(event.body);
    let response = await Airtable.update([{ id, fields }]);
    // @ts-ignore
    response.statusCode = 200;
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return error;
  }
};
