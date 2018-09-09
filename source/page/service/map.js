const key = 'f2d1df02fc1c58d8a4ed23bfc0b584bd';

export async function mapCall(path, data) {
    data = new URLSearchParams(Object.assign({ key }, data));

    const response = await fetch(`https://restapi.amap.com/v3/${path}?${data}`);

    if (response.status > 299)
        throw Object.assign(new URIError(response.statusText), {
            code: response.status,
            response
        });

    data = await response.json();

    if (data.status !== '1')
        throw Object.assign(new Error(data.info), {
            code: data.status,
            response
        });

    return data;
}

export async function currentCoord() {
    const data = await mapCall('ip');

    data.rectangle = data.rectangle.split(';').map(coord => coord.split(','));

    return data;
}

export async function searchCoord(keywords, city, all) {
    const data = await mapCall('place/text', { keywords, city });

    return all ? data : data.pois[0];
}

export async function districtOf(keywords = '') {
    var data = await mapCall('config/district', { keywords, offset: 35 });

    data = data.districts;

    return keywords ? data : data[0].districts;
}
