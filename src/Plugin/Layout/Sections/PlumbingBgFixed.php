<?php

namespace Drupal\just_mod\Plugin\Layout\Sections;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "plumbing_bg_fixed_section",
 *   label = @Translation("Plumbing bg fixed section"),
 *   category = @Translation("Plumbing Layout"),
 *   path = "layouts/sections",
 *   template = "plumbing_bg_fixed",
 *   library = "just_mod/plumbing_bg_fixed",
 * regions = {
 *     "title" = {
 *       "label" = @Translation("Main title"),
 *     },
 *     "subTitle" = {
 *       "label" = @Translation("sub title")
 *     },
 *     "callToAction" = {
 *       "label" = @Translation("Call to action")
 *     }
 *   }
 * )
 */
class PlumbingBgFixed extends FormatageModelsSection
{
    public function build(array $regions)
  {
    $build = parent::build($regions);
    FormatageModelsThemes::formatSettingValues($build);
    return $build;
  }

    public function defaultConfiguration()
  {
    return parent::defaultConfiguration() + [
      'sf' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Contenu',
          'loader' => 'static'
        ],
        'fields' => [
          'title' => [
            'text' => [
              'label' => 'Title',
              'value' => "Free estimates are provided for work that would be
              more involved than a service call."
            ]
          ],
          'subTitle' => [
            'text' => [
              'label' => 'Sub title',
              'value' => "Remodeling, Replacing water
              or sewer lines, Replacing Fixtures, etc."
            ]
          ],
          'callToAction' => [
            'url' => [
              'label' => 'Call action',
              'value' => [
                'link' => '#',
                'text' => 'request an estimate',
              ]
            ]
          ]
        ]
      ]
    ];
  }
}
