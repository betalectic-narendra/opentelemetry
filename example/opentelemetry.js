const { Resource } = require("@opentelemetry/resources");
const { SemanticResourceAttributes } = require("@opentelemetry/semantic-conventions");
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { ConsoleSpanExporter, SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');

const provider = new NodeTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "Rajesh",
  }),
});

provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

// Jaeger exporter
const jaegerExporter = new JaegerExporter({
  serviceName: 'Meaning', // Set a meaningful service name
  // Other Jaeger exporter options (e.g., endpoint, credentials) go here
});

provider.addSpanProcessor(new SimpleSpanProcessor(jaegerExporter));

provider.register();

// Instrumentation for HTTP requests
registerInstrumentations({
  instrumentations: [new HttpInstrumentation()],
});
