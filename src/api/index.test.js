import { describe, test, expect, vi } from 'vitest';
import {getAll, getOne, getTerm} from './index';

const headers = new Headers({
  'User-Agent': 'My Library (https://github.com/jhuezo-dev/dad-jokes)',
  'Accept': 'application/json'
});

global.fetch = vi.fn();

describe('API calls to get jokes', () => {
  test.todo('make a GET request to fetch all jokes')
  // test.todo('make a GET request to fetch a specific term')
  // test.todo('make a GET request to fetch one joke')
  // test.todo('make a GET request to fetch a random joke')
})

function createFetchResponse(data) {
  return {
    json: () => new Promise((resolve) => resolve(data))
  }
}

test('make a GET request to fetch all jokes', async () => {
  const getAllListResponse = [
    {
      "current_page": 1,
      "limit": 20,
      "next_page": 2,
      "previous_page": 1,
      "results":[
        {
          "id": "0189hNRf2g",
          "joke": "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later."
        },
        {
          "id": "08EQZ8EQukb",
          "joke": "Did you hear about the guy whose whole left side was cut off? He's all right now."
        },
        {
          "id": "08xHQCdx5Ed",
          "joke": "Why didn’t the skeleton cross the road? Because he had no guts."
        },
        {
          "id": "0DQKB51oGlb",
          "joke": "What did one nut say as he chased another nut?  I'm a cashew!"
        },
        {
          "id": "0DdFQZgyXnb",
          "joke": "Where do fish keep their money? In the riverbank"
        },
        {
          "id": "0DdaxAX0orc",
          "joke": "I accidentally took my cats meds last night. Don’t ask meow."
        },
        {
          "id": "0DtrrOZDlyd",
          "joke": "Chances are if you' ve seen one shopping center, you've seen a mall."
        },
        {
          "id": "0L6MexPukjb",
          "joke": "Dermatologists are always in a hurry. They spend all day making rash decisions. "
        },
        {
          "id": "0LuXvkq4Muc",
          "joke": "I knew I shouldn't steal a mixer from work, but it was a whisk I was willing to take."
        },
        {
          "id": "0gFdFBsWDd",
          "joke": "I won an argument with a weather forecaster once. His logic was cloudy..."
        },
        {
          "id": "0ga2EdN7prc",
          "joke": "How come the stadium got hot after the game? Because all of the fans left."
        },
        {
          "id": "0ga2wsPZgib",
          "joke": "\"Why do seagulls fly over the ocean?\" \"Because if they flew over the bay, we'd call them bagels.\""
        },
        {
          "id": "0oO71TSv4Ed",
          "joke": "Why was it called the dark ages? Because of all the knights. "
        },
        {
          "id": "0oz51ozk3ob",
          "joke": "A steak pun is a rare medium well done."
        },
        {
          "id": "0ozAXv4Mmjb",
          "joke": "Why did the tomato blush? Because it saw the salad dressing."
        },
        {
          "id": "0wcFBQfiGBd",
          "joke": "Did you hear the joke about the wandering nun? She was a roman catholic."
        },
        {
          "id": "189xHQ7pOuc",
          "joke": "What creature is smarter than a talking parrot? A spelling bee."
        },
        {
          "id": "18Elj3EIYvc",
          "joke": "I'll tell you what often gets over looked... garden fences."
        },
        {
          "id": "18h3wcU8xAd",
          "joke": "Why did the kid cross the playground? To get to the other slide."
        },
        {
          "id": "1DIRSfx51Dd",
          "joke": "Why do birds fly south for the winter? Because it's too far to walk."
        }
      ],
      "search_term": "",
      "status": 200,
      "total_jokes": 744,
      "total_pages": 38
    }
  ]

  fetch.mockResolvedValue(createFetchResponse(getAllListResponse));

  const getAllList = await getAll();

  expect(fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/search',
    {
      headers: headers
    }
  )

  expect(getAllList).toEqual(getAllListResponse);
})