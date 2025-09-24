import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pathToFileURL } from 'url';

dotenv.config();

const app = express();

// Basic middleware
app.use(cors({
	origin: (process.env.CORS_ORIGIN || '*').split(',').map(o => o.trim()),
	credentials: true,
}));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// Root route
app.get('/', (_req, res) => {
	res.status(200).json({ status: 'ok', name: 'MasteryHub API', version: '1.0' });
});

// Health check
app.get('/healthz', (_req, res) => {
	res.status(200).json({
		status: 'healthy',
		uptime: process.uptime(),
		timestamp: Date.now(),
	});
});

// 404 handler (keep after routes)
app.use((req, res) => {
	res.status(404).json({ error: 'Not Found', path: req.originalUrl });
});

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
	const status = err.status || 500;
	res.status(status).json({ error: err.message || 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;

// Start server only when executed directly (not when imported for testing)
const isDirectRun = import.meta && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isDirectRun) {
	app.listen(PORT, () => {
		// eslint-disable-next-line no-console
		console.log(`MasteryHub API listening on http://localhost:${PORT}`);
	});
}

export default app;

