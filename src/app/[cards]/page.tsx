/* import { Metadata } from 'next';

export default async function Country({ params: { country } }: Props) {

  const separateСountry = await getCountry(country);

  return (
    
      <Image
        className={styles.img}
       src={separateСountry.flags.png}
        
        alt={separateСountry.name.common}
        
        width={500}
        height={300}
      />
      
      <div className={styles.content}>
        <h1>{separateСountry.name.common}</h1>
        <p>Population: {separateСountry.population.toLocaleString()}</p>
        <p>Region: {separateСountry.region}</p>
        <p>Capital: {separateСountry.capital}</p>
        <p>Area: {separateСountry.area.toLocaleString()} km²</p>
        
        <p>Timezones: {separateСountry.timezones.join(', ')}</p>
        
        {separateСountry.currencies && (
          <p>
            Currencies:{' '}
            {Object.values(separateСountry.currencies)
              .map((currency) => currency.name)
              .join(', ')}
          </p>
        )}

        {separateСountry.languages && (
          <p>Languages: {Object.values(separateСountry.languages).join(', ')}</p>
        )}
        
        {separateСountry.borders && <p>Borders: {separateСountry.borders.join(', ')}</p>}

        <p>Continent: {separateСountry.continents.join(', ')}</p>
        <p>

          Google Maps: <a href={separateСountry.maps.googleMaps}>Link</a>
        </p>
      </div>
    </div>
  );
}
 */