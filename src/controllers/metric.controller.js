import * as metricService from '../services/metric.service.js';

export async function getPictures(req, res, next) {
    try {
        const pictures = await metricService.getPictures();

        res.status(200).json(pictures);
    } catch (error) {
        next(error);
    }
}