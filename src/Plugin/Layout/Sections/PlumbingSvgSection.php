<?php

namespace Drupal\just_mod\Plugin\Layout\Sections;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "plumbing_svg_section",
 *   label = @Translation("Plumbing svg section"),
 *   category = @Translation("Plumbing Layout"),
 *   path = "layouts/sections",
 *   template = "plumbing_svg_section",
 *   library = "just_mod/plumbing_svg_section",
 * regions = {
 *     "leftTitle" = {
 *       "label" = @Translation("Left title"),
 *     },
 *     "leftDescription" = {
 *       "label" = @Translation("Left Description")
 *     },
 *     "leftBoutton" = {
 *       "label" = @Translation("Left Button")
 *     },
 *     "middleTitle" = {
 *       "label" = @Translation("Middle title"),
 *     },
 *     "middleDescription" = {
 *       "label" = @Translation("middle Description")
 *     },
 *     "middleBoutton" = {
 *       "label" = @Translation("middle Button")
 *     },
 *     "rightTitle" = {
 *       "label" = @Translation("Right title"),
 *     },
 *     "rightDescription" = {
 *       "label" = @Translation("Right Description")
 *     },
 *     "rightBoutton" = {
 *       "label" = @Translation("Right Button")
 *     },
 *   }
 * )
 */
class PlumbingSvgSection extends FormatageModelsSection
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
                    'leftTitle' => [
                        'text' => [
                            'label' => ' Left Title',
                            'value' => "maintenance"
                        ]
                    ],
                    'leftDescription' => [
                        'text_html' => [
                            'label' => 'Left description',
                            'value' => '
                            <p>Garage Door Repair. Carpentry. Termite Damage Repairs. Tub and shower
                            caulking. Doors. Fences. Weatherproofing…</p>'
                        ]
                    ],
                    'leftBoutton' => [
                        'url' => [
                            'label' => 'read more',
                            'value' => [
                                'link' => '#',
                                'text' => 'request a plomber',
                                'class' => 'btn lm-btn lm-btn-noir'
                            ]
                        ]
                    ],
                    'middleTitle' => [
                        'text' => [
                            'label' => ' middle Title',
                            'value' => "maintenance"
                        ]
                    ],
                    'middleDescription' => [
                        'text_html' => [
                            'label' => 'middle title',
                            'value' => '
                                    <p>Garage Door Repair. Carpentry. Termite Damage Repairs. Tub and shower
                                    caulking. Doors. Fences. Weatherproofing…</p>'
                        ]
                    ],
                    'middleBoutton' => [
                        'url' => [
                            'label' => 'read more',
                            'value' => [
                                'link' => '#',
                                'text' => 'request a plomber',
                                'class' => 'btn lm-btn lm-btn-noir'
                            ]
                        ]
                    ],
                    'rightTitle' => [
                        'text' => [
                            'label' => ' right Title',
                            'value' => "maintenance"
                        ]
                    ],
                    'rightDescription' => [
                        'text_html' => [
                            'label' => 'right title',
                            'value' => '
                                            <p>Garage Door Repair. Carpentry. Termite Damage Repairs. Tub and shower
                                            caulking. Doors. Fences. Weatherproofing…</p>'
                        ]
                    ],
                    'rightBoutton' => [
                        'url' => [
                            'label' => 'read more',
                            'value' => [
                                'link' => '#',
                                'text' => 'request a plomber',
                                'class' => 'btn lm-btn lm-btn-noir'
                            ]
                        ]
                    ]
                ]
            ]
        ];
    }
}
