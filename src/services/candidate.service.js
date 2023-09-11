import { httpService } from './http.service';

export async function queryCandidates({ page, pageSize, token }) {
    const queryParams = {
        page: page,
        pageSize: pageSize,
    };

    httpService.updateToken(token)

    try {
        const candidates = await httpService.get('candidates', queryParams);
        return candidates;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getCandidateById(id){
    try {
        const candidate = await httpService.get(`candidates/${id}`);
        return candidate;
    } catch (error) {
        throw new Error(error);
    }
}