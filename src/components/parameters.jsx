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

  const endpointData = data.paths[endpoint][method];
  const parameters = endpointData.parameters || [];

  // Separate path/query parameters from body parameters
  const pathQueryParams = parameters.filter((param) => param.in !== 'body');
  const bodyParam = parameters.find((param) => param.in === 'body');

  // If body parameter references a schema, get the schema definition
  let bodyProperties = [];
  if (bodyParam && bodyParam.schema && bodyParam.schema.$ref) {
    const schemaRef = bodyParam.schema.$ref.split('/').pop();
    const schema = data.definitions[schemaRef];
    if (schema && schema.properties) {
      bodyProperties = Object.entries(schema.properties).map(
        ([key, value]) => ({
          name: key,
          type: value.type || 'object',
          description: value.description,
          required: schema.required && schema.required.includes(key),
        })
      );
    }
  }

  return (
    <ul className="ApiReference-Parameters">
      <li className="ApiReference-Parameter header">{header}</li>
      {pathQueryParams.map((param, index) => (
        <Parameter
          key={index}
          attrKey={param.name}
          type={param.type}
          required={param.required}
          description={param.description}
        />
      ))}
      {bodyProperties.length > 0 && (
        <>
          <li className="ApiReference-Parameter header">Request Body</li>
          {bodyProperties.map((prop, index) => (
            <Parameter
              key={index}
              attrKey={prop.name}
              type={prop.type}
              required={prop.required}
              description={prop.description}
            />
          ))}
        </>
      )}
    </ul>
  );
}
