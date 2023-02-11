import * as core from '@actions/core'
import * as github from '@actions/github'
import * as githubReadmeStats from '@zo-bro-23/github-readme-stats-test'
import * as fs from 'fs'

try {
    const options = {
        username: core.getInput('username', { required: true }),
        theme: core.getInput('theme'),
        show_icons: core.getInput('show_icons'),
        count_private: core.getInput('count_private'),
        include_all_commits: core.getInput('include_all_commits'),
        hide: core.getInput('hide'),
        hide_title: core.getInput('hide_title'),
        hide_border: core.getInput('hide_border'),
        line_height: core.getInput('line_height'),
        title_color: core.getInput('title_color'),
        icon_color: core.getInput('icon_color'),
        text_color: core.getInput('text_color'),
        bg_color: core.getInput('bg_color'),
        cache_seconds: core.getInput('cache_seconds'),
        custom_title: core.getInput('custom_title'),
        disable_animations: core.getInput('disable_animations'),
        locale: core.getInput('locale'),
        hide_rank: core.getInput('hide_rank'),
        border_radius: core.getInput('border_radius'),
        border_color: core.getInput('border_color'),
        text_bold: core.getInput('text_bold'),
        card_width: core.getInput('card_width'),
        ring_color: core.getInput('ring_color'),
        exclude_repo: core.getInput('exclude_repo')
    }

    process.env['PAT_1'] = core.getInput('token', { required: true })
    process.env['FETCH_MULTI_PAGE_STARS'] = core.getInput('fetch_multipage')

    githubReadmeStats.generateStatsCard(options)
        .then(card => {
            fs.writeFileSync('card.svg', card)
        })
} catch (error) {
    core.setFailed(error.message)
}