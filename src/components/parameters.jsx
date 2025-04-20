import Markdown from 'react-markdown';

var data = require('../../openapi/scalekit.swagger.json');

export function Parameter({ children, ...props }) {
  return (
    <li className="ApiReference-Parameter">
      <div className="attr">
        <span className="key">{props.attrKey}</span>
        <span className="type">{props.type}</span>
        {props.required ? <span className="required">required</span> : ''}
      </div>
      <div className="desc">
        <Markdown>{props.description}</Markdown>
      </div>
      {children}
    </li>
  );
}

export default function Parameters({
  header = 'Parameters',
  endpoint,
  method,
}) {
  if (
    !endpoint ||
    !method ||
    !data.paths[endpoint] ||
    !data.paths[endpoint][method]
  ) {
    return null;
  }

  const endpointData = data['paths'][endpoint][method];
  const parameters = endpointData.parameters || [];
  const requestBody = endpointData.requestBody;

  return (
    <ul className="ApiReference-Parameters">
      <li className="ApiReference-Parameter header">{header}</li>
      {parameters.map((param, index) => (
        <Parameter
          key={index}
          attrKey={param.name}
          type={param.type}
          required={param.required}
          description={param.description}
        />
      ))}
      {requestBody && (
        <>
          <li className="ApiReference-Parameter header">Request Body</li>
          {Object.entries(
            requestBody.content['application/json'].schema.properties || {}
          ).map(([key, value]) => (
            <Parameter
              key={key}
              attrKey={key}
              type={value.type}
              required={requestBody.content[
                'application/json'
              ].schema.required?.includes(key)}
              description={value.description}
            />
          ))}
        </>
      )}
    </ul>
  );
}
