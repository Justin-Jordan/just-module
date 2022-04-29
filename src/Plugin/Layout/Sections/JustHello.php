<?php

namespace Drupal\just_mod\Plugin\Layout\Sections;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "just_hello",
 *   label = @Translation("Model by just"),
 *   category = @Translation("My Layouts"),
 *   path = "layouts/sections",
 *   template = "just_hello",
 *   library = "just_mod/just_hello",
 *   regions = {
 *     "main" = {
 *       "label" = @Translation("Main content"),
 *     },
 *     "right" = {
 *       "label" = @Translation("Right content")
 *     },
 *     "left" = {
 *       "label" = @Translation("Left content")
 *     },
 *     "down" = {
 *       "label" = @Translation("Down content")
 *     }
 *   }
 * )
 */
class JustHello extends FormatageModelsSection
{
    /**
     *
     * {@inheritdoc}
     */
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
                    'main' => [
                        'text_html' => [
                            'label' => 'description',
                            'value' => "Enfin, vos travaux de rénovation simples et sans surprise !"
                        ]
                    ]
                ]
            ]
        ];
    }
}
