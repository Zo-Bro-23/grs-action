import * as core from '@actions/core'
import * as github from '@actions/github'
import * as githubReadmeStats from '@zo-bro-23/github-readme-stats-test'
import * as fs from 'fs'
import queryString from 'query-string'

try {
    const options = queryString.parse(core.getInput('options', { required: true }))
    const card = core.getInput('card', { required: false })
    const path = core.getInput('path')

    process.env['PAT_1'] = core.getInput('token', { required: true })
    process.env['FETCH_MULTI_PAGE_STARS'] = core.getInput('fetch_multipage')

    switch (card) {
        case '':
            githubReadmeStats.generateStatsCard(options)
                .then(card => {
                    fs.writeFileSync(path || 'grs/stats.svg', card)
                })
            break
        case 'repo':
            githubReadmeStats.generateRepoCard(options)
                .then(card => {
                    fs.writeFileSync(path || 'grs/repo.svg', card)
                })
            break
        case 'top-langs':
            githubReadmeStats.generateTopLanguagesCard(options)
                .then(card => {
                    fs.writeFileSync(path || 'grs/top-langs.svg', card)
                })
            break
        case 'wakatime':
            githubReadmeStats.generateWakatimeCard(options)
                .then(card => {
                    fs.writeFileSync(path || 'grs/wakatime.svg', card)
                })
        default:
            throw new Error('Card type must be `repo`, `top-langs`, or `wakatime`')
            break
    }
} catch (error) {
    core.setFailed(error.message)
}