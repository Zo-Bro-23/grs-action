import * as core from '@actions/core'
import * as github from '@actions/github'
import * as githubReadmeStats from '@zo-bro-23/github-readme-stats-test'
import * as fs from 'fs'

try {
    const token = core.getInput('token', { required: true })
    const username = core.getInput('username', { required: true })

    process.env.token = token

    githubReadmeStats.generateStatsCard({ username, theme: core.getInput('theme') })
        .then(card => {
            fs.writeFileSync('card.svg', card)
        })
} catch (error) {
    core.setFailed(error.message)
}